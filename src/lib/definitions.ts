type BHDetails = Response & {
  bhouse: IBHouse;
  rooms: IRoom[];
  user: IUser;
};

type ProfileDetails = Response & {
  user: IUser;
  bHouses: IBHouse[];
};

type IUser = {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  created_at?: Date;
  updated_at?: Date;
};

type IBHouse = {
  id?: string;
  userId: string;
  imgUrl: string;
  title?: string;
  description?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type IRoom = {
  id?: string;
  listingId: string;
  roomNumber?: string;
  price?: number;
  isAvailable?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

type IAuth = {
  userSession: IUser | null;
  checkUser: () => Promise<void>;
  login: (userData: IUser) => Promise<void>;
  Register: (userData: IUser) => Promise<void>;
  Logout: () => Promise<void>;
};

type IData = {
  userData: IUser | null;
  BHouseList: IBHouse[] | null;
  BHouseDetails: IBHouse | null;
  BHRoomList: IRoom[] | null;
  BHouseListByUser: IBHouse[] | null;
  getUserByID: (id: string | undefined) => Promise<void>;
  getBHouse: () => Promise<void>;
  getBHouseByID: (id: string | undefined) => Promise<void>;
  getBHRoomByID: (id: string | undefined) => Promise<void>;
  getBHousePostedByUser: (id: string | undefined) => Promise<void>;

  postBHouse: (newBHouse: IBHouse) => Promise<void>;
  postRoom: (newRoom: IRoom) => Promise<void>;

  updateBoardingHouse: (
    id: string | undefined,
    updatedBH: IBHouse
  ) => Promise<void>;

  deleteBHouse: (id: string | undefined) => Promise<void>;
  deleteRoom: (id: string | undefined) => Promise<void>;
};
