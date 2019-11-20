import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    saveUser() {
      console.log(
        "Model is valid: ",
        this.model,
        this.model.get("validations.isValid")
      );
      this.model.set("shouldValidate", true);
      console.log(
        "Model is valid: ",
        this.model,
        this.model.get("validations.isValid")
      );
    }
  }
});
