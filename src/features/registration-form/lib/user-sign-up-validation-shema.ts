import joi from "joi";
import { UserSignUpJoiDto } from "../../../shared/constants/types/user-sign-up-joi-request-dto";
import { RFC2822 } from "../constants/email-regex.";

export const userSignUpValidationShema = joi.object<UserSignUpJoiDto, true>(
  {
    name: joi.string().min(2).max(60).required(),
    email: joi.string().regex(RFC2822).min(2).max(100).required(),
    phone: joi.string().required(),
  }
);
