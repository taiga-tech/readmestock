<template>
  <div>
    <v-container>
      <v-row justify="start" dense>
        <v-col
          v-for="(readme, i) in readmes"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="3"
        >
          <v-card
            elevation="4"
            max-height="190"
            min-height="190"
            :loading="!readme.repo"
            :disabled="!readme.repo"
          >
            <v-card-title>{{ readme.repo }}</v-card-title>
            <v-card-subtitle>
              <v-chip
                v-for="(lang, index) in languages"
                :key="index"
                outlined
                x-small
                >{{ lang }}</v-chip
              >
            </v-card-subtitle>
            <v-divider v-if="readme.discription != ''" class="mx-4" />
            <v-card-text v-if="readme.discription != ''">
              <div class="mx-2">
                {{ readme.discription }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-spacer />
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // apiのlangagesをデータにいれる
      languages: [
        'Ruby',
        'Haml',
        'SCSS',
        'JavaScript',
        'HTML',
        'Dockerfile',
        'Shell',
      ],
      readmes: [
        {
          repo: 'divingapp',
          slug: 'divingapp',
          discription: '',
        },
        {
          repo: 'ReservationApp',
          slug: 'reservationapp',
          discription:
            '小規模ヘアサロン向けの予約アプリです。 絶賛アップデート中！',
        },
        {
          repo: 'ReservationApp',
          slug: 'reservationapp',
          discription:
            '小規模ヘアサロン向けの予約アプリです。 絶賛アップデート中！小規模ヘアサロン向けの予約アプリです。 絶賛アップデート中！小規模ヘアサロン向けの予約アプリです。 絶賛アップデート中！小規模ヘアサロン向けの予約アプリです。 絶賛アップデート中！小規模ヘアサロン向けの予約アプリです。 絶賛アップデート中！小規模ヘアサロン向けの予約アプリです。 絶賛アップデート中！小規模ヘアサロン向けの予約アプリです。 絶賛アップデート中！小規模ヘアサロン向けの予約アプリです。 絶賛アップデート中！小規模ヘアサロン向けの予約アプリです。 絶賛アップデート中！小規模ヘアサロン向けの予約アプリです。 小規模ヘアサロン向けの予約アプリです。 絶賛アップデート中！小規模ヘアサロン向けの予約アプリです。 絶賛アップデート中！小規模ヘアサロン向けの予約アプリです。 絶賛アップデート中！小規模ヘアサロン向けの予約アプリです。 ',
        },
        {
          repo: 'ReservationApp',
          slug: 'reservationapp',
          discription:
            '小規模ヘアサロン向けの予約アプリです。 絶賛アップデート中！',
        },
        {
          repo: 'ReservationApp',
          slug: 'reservationapp',
          discription:
            '小規模ヘアサロン向けの予約アプリです。 絶賛アップデート中！',
        },
      ],
    }
  },
  methods: {
    show(i) {
      console.log(i)
      this.dshow = true
    },
  },
}
</script>
