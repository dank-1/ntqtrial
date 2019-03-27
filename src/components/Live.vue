<template>
  <div class="live">
    <template v-if="isWaiting">
      <div class="waiting" @click="onClickNext">
        <p>waiting</p>
      </div>
    </template>
    <template v-if="isIncomingCall">
      <div class="incoming-call" @click="onClickNext">
        <p>incoming-call</p>
      </div>
    </template>
    <template v-if="isJoining">
      <div class="joining" @click="onClickNext">
        <p>joining</p>
      </div>
    </template>
  </div>
</template>

<script>
const LIVE_WAITING = 'waiting'
const LIVE_INCOMING_CALL = 'incoming_call'
const LIVE_JOINING = 'joining'

export default {
  name: 'live',
  data () {
    return {
      status: LIVE_WAITING
    }
  },
  computed: {
    isWaiting () {
      return this.status === LIVE_WAITING
    },
    isIncomingCall () {
      return this.status === LIVE_INCOMING_CALL
    },
    isJoining () {
      return this.status === LIVE_JOINING
    }
  },
  methods: {
    onClickNext () {
      if (this.isWaiting) { this.status = LIVE_INCOMING_CALL }
      else if (this.isIncomingCall) { this.status = LIVE_JOINING }
      else if (this.isJoining) { this.status = LIVE_WAITING }
    }
  }
}
</script>

<style>
html, body, #app, main, .live,
.waiting, .incoming-call, .joining {
  height:100%;
}

.live {
  width: 100%;
}

.waiting, .incoming-call, .joining {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
