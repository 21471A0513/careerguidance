export interface Details {
    studentname: string,
    email: String,
    address: String,
    phoneno: Number,
    schoolname: String,
    schooladdress: String,
    gpa: Number
}
export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
 }
  export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
  }
  export interface Read {
      Result: [];
}