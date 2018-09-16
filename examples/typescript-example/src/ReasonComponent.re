let component = ReasonReact.statelessComponent("Component");

[@genType]
type person = {
  name: string,
  surname: string,
};

[@genType]
let make =
    (~message="default message", ~person: person, ~intList=[0], _children)
    : ReasonReact.component(_) => {
  ...component,
  render: _self =>
    <div className="App">
      (
        "ReasonReact "
        ++ message
        ++ " and intList: "
        ++ (
          intList |> List.map(i => string_of_int(i)) |> String.concat(",")
        )
        ++ " and person name: "
        ++ person.name
      )
      ->ReasonReact.string
    </div>,
};

[@genType]
let minus = (~first=0, ~second) => first - second;

[@genType]
let useTypeDefinedInAnotherModule = (x: Types.t) => x;

[@genType]
type t =
  | A
  | B(int)
  | C(string);

[@genType]
let tToString = t =>
  switch (t) {
  | A => "A"
  | B(i) => "B(" ++ string_of_int(i) ++ ")"
  | C(s) => "C(" ++ s ++ ")"
  };