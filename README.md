# ember-cp-buffered-validations

The aim of this repo is to be a minimal reproducible version of a bug I came across.

When using a BufferedProxy –and adding the validations on that proxy– the CP passed to ember-cp-validation's `disabled` option doesn't re-compute because `model.shouldValidate` itself is not updated. The model object (the proxy) is thus still valid as the validations stay in the disabled state:

Here is the screencast:
https://share.getcloudapp.com/yAu4EQy5


