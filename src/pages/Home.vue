<template>
  <main>
    <Header title="Vue Composition API" />
    <SearchCandidates
      :states="state.states"
      :cities="state.cities"
      :candidates="state.candidates"
      :eleicao="state.eleicao"
      :stateSelected="state.stateSelected"
      :citySelected="state.citySelected"
      :candidateSelected="state.candidateSelected"
      :onChangeState="onChangeState"
      :onChangeCity="onChangeCity"
      :onChangeCandidates="onChangeCandidates"
      :isFetching="state.isFetching"
    />
    <CandidateDetail :candidateDetail="state.candidateDetail" />
    <Footer />
  </main>
</template>

<script>
import { onMounted, reactive } from "vue";
import TSEService from "../services/Tse";
import Header from "../components/Header";
import SearchCandidates from "../components/SearchCandidates";
import CandidateDetail from "../components/CandidateDetail";
import Footer from "../components/Footer";

export default {
  name: "HomePage",
  components: {
    Header,
    SearchCandidates,
    CandidateDetail,
    Footer
  },
  setup() {
    const state = reactive({
      states: [],
      cities: [],
      candidates: [],
      eleicao: {},
      stateSelected: "",
      citySelected: "",
      candidateSelected: "",
      candidateDetail: {},
      isFetching: false
    });

    const onChangeCity = async event => {
      if (event.currentTarget.value) {
        state.isFetching = true;
        state.citySelected = event.currentTarget.value;
        state.candidateSelected = "";
        state.candidates = [];
        state.candidateDetail = {};

        const { candidatos } = await TSEService.getCandidates({
          city: state.citySelected
        });
        state.candidates = candidatos;
        state.isFetching = false;
      }
    };

    const onChangeState = async event => {
      if (event.currentTarget.value) {
        state.isFetching = true;
        state.stateSelected = event.currentTarget.value;
        state.citySelected = "";
        state.cities = [];
        state.candidateSelected = "";
        state.candidates = [];
        state.candidateDetail = {};

        const { municipios } = await TSEService.getCities({
          state: event.currentTarget.value,
          id: state.eleicao.sq_ELEICAO
        });
        state.cities = municipios;
        state.isFetching = false;
      }
    };

    const onChangeCandidates = async event => {
      if (event.currentTarget.value) {
        state.isFetching = true;
        state.candidateSelected = event.currentTarget.value;

        const response = await TSEService.getCandidateDetail({
          city: state.citySelected,
          candidato: state.candidateSelected
        });
        state.candidateDetail = response;
        state.isFetching = false;
      }
    };

    onMounted(async () => {
      state.isFetching = true;
      const { ues, eleicao } = await TSEService.getStates();

      state.eleicao = eleicao;
      state.states = ues;
      state.isFetching = false;
    });

    return {
      state,
      onChangeState,
      onChangeCity,
      onChangeCandidates
    };
  }
};
</script>
