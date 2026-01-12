const AsyncStorage = {
  storage: {} as { [key: string]: any },
  setItem: async (key: string | number, value: any) => {
    AsyncStorage.storage[key.toString()] = value;
  },
  getItem: async (key: string | number) => {
    return AsyncStorage.storage[key.toString()] || null;
  },
  removeItem: async (key: string | number) => {
    delete AsyncStorage.storage[key.toString()];
  }
};
