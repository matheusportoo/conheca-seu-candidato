<template>
  <div>
    <Dropdown
      defaultOption="selecione um estado"
      :options="
        states
          .filter(s => s.sigla !== 'BR')
          .map(s => ({ value: s.sigla, label: s.nome }))
      "
      :onChange="onChangeState"
      :optionSelected="stateSelected"
      :isFetching="isFetching"
    />

    <Dropdown
      defaultOption="selecione uma cidade"
      :options="cities.map(c => ({ value: c.codigo, label: c.nome }))"
      :onChange="onChangeCity"
      :optionSelected="citySelected"
      :isFetching="isFetching"
    />

    <Dropdown
      defaultOption="selecione um candidato"
      :options="
        candidates.map(c => ({ value: String(c.id), label: c.nomeUrna }))
      "
      :onChange="onChangeCandidates"
      :optionSelected="candidateSelected"
      :isFetching="isFetching"
    />
  </div>
</template>

<script>
import Dropdown from "./Dropdown";

export default {
  name: "SearchCandidates",
  components: {
    Dropdown
  },
  props: {
    states: { type: Array, default: () => [] },
    cities: { type: Array, default: () => [] },
    candidates: { type: Array, default: () => [] },
    eleicao: { type: Object, default: () => {} },
    stateSelected: { type: String, default: () => "" },
    citySelected: { type: String, default: () => "" },
    candidateSelected: { type: String, default: () => "" },
    onChangeState: { type: Function, default: () => null },
    onChangeCity: { type: Function, default: () => null },
    onChangeCandidates: { type: Function, default: () => null },
    isFetching: { type: Boolean, default: () => false }
  }
};
</script>

<style scoped lang="scss">
div {
  margin: 40px 0 0;
}
</style>
