import Vue from 'vue';

/** Button Component */
declare class Block extends Vue {
  rows: string
  cols: string
  pattern: string
  rounder: string
  aspectRatio: string

  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

export default Block;
