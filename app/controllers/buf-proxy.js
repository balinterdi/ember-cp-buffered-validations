import Controller from "@ember/controller";
import { observer } from "@ember/object";
import { action } from "@ember/object";

export default Controller.extend({
  // eslint-disable-next-line ember/no-observers
  watchShouldValidate: observer("model.shouldValidate", function() {
    console.log(
      "model.shouldValidate has changed to ",
      this.model.get("shouldValidate")
    );
  }),

  actions: {
    saveUser() {
      console.log(
        "Model is valid: ",
        this.model,
        this.model.get("content.validations.isValid")
      );
      this.model.set("content.shouldValidate", true);
      console.log(
        "Model is valid: ",
        this.model,
        this.model.get("content.validations.isValid")
      );
    }
  }
});
