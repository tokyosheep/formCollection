import { FormModeAction , ModeKeys } from "../reducer/formMode";

export const formMode_check:(checked,prop:ModeKeys)=>FormModeAction = (checked,prop) => ({type:"formMode_check",prop:prop,checked:checked});