import * as React from "react";
import * as Scrivito from "scrivito";
import { InPlaceEditingPlaceholder } from "../../Components/InPlaceEditingPlaceholder";
import { WrapIfClassName } from "../../Components/WrapIfClassName";
import { alignmentClassName } from "../../utils/alignmentClassName";

Scrivito.provideComponent("ButtonWidget", ({ widget }) => {
  return (
    <div>
      {Scrivito.isUserLoggedIn() ? (
        <span>
          Im logged in.
          <button
            className="btn-primary"
            onClick={() => {
              Scrivito.logout();
            }}
          >
            Log me out
          </button>
        </span>
      ) : (
        <span>
          Im not logged in.{" "}
          <button
            className="btn-primary"
            onClick={() => {
              Scrivito.ensureUserIsLoggedIn();
            }}
          >
            Log me in
          </button>
        </span>
      )}
    </div>
  );
  const target = widget.get("target");
  let text = target && target.title();
  if (!text) {
    text = (
      <InPlaceEditingPlaceholder>
        Provide the button text in the widget properties.
      </InPlaceEditingPlaceholder>
    );
  }

  const classNames = ["btn"];
  classNames.push(widget.get("style") || "btn-primary");

  const alignment = widget.get("alignment");
  if (alignment === "block") classNames.push("btn-block");

  return (
    <WrapIfClassName className={alignmentClassName(alignment)}>
      <Scrivito.LinkTag to={target} className={classNames.join(" ")}>
        {text}
        <i className="fa fa-angle-right fa-4" aria-hidden="true" />
      </Scrivito.LinkTag>
    </WrapIfClassName>
  );
});
