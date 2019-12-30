module Signin exposing (..)


-- imports

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)

import Http exposing (..)

import Url exposing (..)
import Url.Parser as Parser exposing (..)
import Browser.Navigation as Nav exposing (..)

import Json.Decode as Decode exposing (..)
import Json.Decode.Field as Field exposing (..)


-- modules

import Alert exposing (..)


-- model

type alias Model a =
  { a
    | url : Url
    , key : Nav.Key
    , alert : Maybe Alert
    , signin : Data
  }

type alias Data =
  { pseudo : String
  , password : String
  }

data : Data
data =
  { pseudo = ""
  , password = ""
  }


-- update

type Msg
  = NoOp
  | Input Field
  | Submit
  | Answer (Result Http.Error (Result String String))

type Field
  = Pseudo String
  | Password String

update : Msg -> Model a -> (Model a, Cmd Msg)
update msg model =
  case msg of
    Input field ->
      case field of
        Pseudo pseudo ->
          let signinData = model.signin in
            ( { model | signin = { signinData | pseudo = pseudo} }
            , Cmd.none
            )

        Password password ->
          let signinData = model.signin in
            ( { model | signin = { signinData | password = password} }
            , Cmd.none
            )

    Submit ->
      ( model
      , Http.post
          { url = "http://localhost/control/signin.php"
          , body =
              multipartBody
                [ stringPart "pseudo" model.signin.pseudo
                , stringPart "password" model.signin.password
                ]
          , expect = Http.expectJson Answer answerDecoder
          }
      )

    Answer result ->
      case result of
        Ok (Ok message) ->
          ( { model | signin = data } |> Alert.successAlert message
          , Nav.pushUrl model.key "/browse"
          )
        Ok (Err message) ->
          (model |> Alert.invalidImputAlert message, Cmd.none)
        Err _ ->
          (model |> Alert.serverNotReachedAlert, Cmd.none)

    _ ->
       (model, Cmd.none)


-- decoder

answerDecoder : Decoder (Result String String)
answerDecoder =
  Field.require "result" resultDecoder <| \result ->
  Field.require "message" Decode.string <| \message ->

  Decode.succeed (result message)

resultDecoder : Decoder (String -> Result String String)
resultDecoder =
  Decode.string |> andThen
    (\ str ->
      case str of
        "Success" ->
          Decode.succeed Ok

        "Failure" ->
          Decode.succeed Err

        _ ->
          Decode.fail "statusDecoder failed : not a valid status"
    )


-- view

view : Model a -> Html Msg
view model =
  Html.form [ onSubmit Submit ]
            [ input [ type_ "text"
                    , placeholder "pseudo"
                    , onInput (Input << Pseudo)
                    , Html.Attributes.value model.signin.pseudo
                    ] []
            , input [ type_ "password"
                    , placeholder "password"
                    , onInput (Input << Password)
                    , Html.Attributes.value model.signin.password
                    ] []
            , button [ type_ "submit" ]
                     [ text "Sign In" ]
            , a [ href "/signup" ]
                [ text "You don't have any account?" ]
            ]