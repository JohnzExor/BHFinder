type IUser = {
  _id?: string;
  username?: string;
  email?: string;
  password?: string;
  created_at?: Date;
  updated_at?: Date;
};

type IBHouse = {
  _id?: string;
  user?: string;
  title?: string;
  description?: string;
  min_price?: number;
  max_price?: number;
  location?: string;
  created_at?: Date;
  updated_at?: Date;
};

type IRoom = {
  _id?: string;
  listing?: string;
  room_number?: string;
  price?: number;
  is_available?: boolean;
  created_at?: Date;
  updated_at?: Date;
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
