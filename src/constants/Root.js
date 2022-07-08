/**
 * api list
 */
const ApiList = {
  Socket: null,
  PROVIDERLOCATION: {},
  SignIn: 'auth/signin',
  SignUp: 'users/signup',
  ResetPassword: 'users/resetPassword',
  UpdateUserInfo: 'users/updateUser',
  userInfo: 'users/',
  EmailCheck: "users/emailCheck",

  RegisterService: "shop/setup-Service",
  GetService: "shop/getService",
  Edit_service: "shop/editService",
  GetDogPro: "users/getdogs",
  DeleteDog: "users/deleteDog",
  GetCatPro: "users/getCats",
  DeleteCat: "users/deleteCat",
  CreateBook: "shop/createBook",
  LoadAppointData: "shop/loadAppointData",
  AddFavourite: "shop/addfavourite",
  LoadFavouriteDate: "shop/loadfavourite",
  LoadProfileData: "users/getUserData",
  AddDogVaccine: "users/adddogVaccine",
  LoadVaccineData: "users/loadVaccine",
  RemoveVaccineData: "users/RemoveVaccine",
  CreateReview: "shop/createReview",
  LoadReviewData: "shop/loadreview",
  ChangeLocationState: "shop/changelocationstate",
  GetBookState: "shop/getbookstate",
  RescheduleBook: "shop/reschedule",
  GetGroomers: "users/getGroomers",
  DeleteGroomer: "users/deleteGroomer",
  UpdateState: "shop/updateState",
  BookComplete: "shop/bookComplete",
  SetGroomer: "shop/setgroomer",
}

const dev = {
  BACKEND_URL: "http://192.168.115.39:3333/",
  IMAGE_URL: "http://192.168.115.39:3333/",
  ...ApiList
}

const production = {
  BACKEND_URL: "https://pet.spaw.ibluday.com/api/",
  SOCKET_URL: "https://pet.spaw.ibluday.com/",
  IMAGE_URL: "https://pet.spaw.ibluday.com/",
  ...ApiList
}

export const ROOT = dev