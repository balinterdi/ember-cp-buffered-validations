import Model, { attr } from "@ember-data/model";
import { validator, buildValidations } from "ember-cp-validations";
import { not } from "@ember/object/computed";

export const Validations = buildValidations(
  {
    name: validator("presence", true)
  },
  {
    disabled: not("model.content.shouldValidate")
  }
);

export default Model.extend(Validations, {
  name: attr()
});
