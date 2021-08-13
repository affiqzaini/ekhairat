import { ActionTree, GetterTree, MutationTree } from "vuex";

export const state = () => ({
  navMiniVariant: false as boolean,
  user: {
    fullname: "James Bond",
    avatar: "https://source.unsplash.com/ByNP62M5wvM/300x300",
    position: "Administrator"
  },
  members: [
    {
      name: "Zaini bin Ramli",
      icNo: "643423-12-2343",
      address: "86G, Jalan Pandan Indah 1/19, Pandan Indah, 55100 Kuala Lumpur",
      dependants: [
        { name: "Affiq Zaini", icNo: "960613-26-5027" },
        { name: "Adeeb Zaini", icNo: "981212-10-6743" }
      ]
    }
  ]
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  //
};

export const mutations: MutationTree<RootState> = {
  setNavMiniVariant: (state, miniVariant) => {
    state.navMiniVariant = miniVariant;
  }
};

export const actions: ActionTree<RootState, RootState> = {};
