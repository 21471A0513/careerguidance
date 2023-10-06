export interface StudentDetails {
    name: String;
    hallticketno: number;
    gender: String;
    sclname: String;
    coursename: String;
    gpa: number;
    phno: number;
    address: String;
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
    Result: [];
  }