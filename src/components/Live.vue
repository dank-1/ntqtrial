<template>
  <section class="screen-box">
    <Header
      v-if="pageTitle"
      :title="pageTitle"
      url="/"
    />
    <main :class="mainClassName">
      <template v-if="isWaiting">
        <div
          class="waiting"
          @click="onClickIncomingCall"
        >
          <p class="information">
            The coach will enter the room
            <br>
            when the reservation time comes.
          </p>
          <div class="live-sample">
            <p>Is the distance from camera right?</p>
            <div class="angle">
              <div class="angle__to-dance">
                <label>to-dance</label>
              </div>
              <div class="angle__to-talk">
                <label>to-talk</label>
              </div>
            </div>
          </div>
          <div class="salfy" />
        </div>
      </template>
      <template v-if="isIncomingCall">
        <div class="incoming-call">
          <p>Incoming...</p>
          <div class="live-actions">
            <div
              class="deny-action"
              @click="onClickDeny"
            >
              <label>拒否</label>
            </div>
            <div
              class="start-action"
              @click="onClickStart"
            >
              <label>応答</label>
            </div>
          </div>
        </div>
      </template>
      <template v-if="isJoining">
        <div
          class="joining"
        >
          <div class="joinig__item">
            <div
              class="salfy"
              @click="showLiveActions = !showLiveActions"
            />
            <transition name="fade">
              <div
                v-if="showLiveActions"
                class="live-actions"
              >
                <div
                  class="live-record"
                  @click="onClickRecord"
                />
                <div
                  class="deny-action"
                  @click="onClickDeny"
                />
                <div
                  class="toggle-camera"
                  @click="onClickToggleCamera"
                />
              </div>
            </transition>
          </div>
        </div>
      </template>
    </main>
  </section>
</template>

<script>
import Header from './Header.vue'

const LIVE_WAITING = 'waiting'
const LIVE_INCOMING_CALL = 'incoming_call'
const LIVE_JOINING = 'joining'

export default {
  name: 'live',
  components: { Header },
  data () {
    return {
      status: LIVE_WAITING,
      showLiveActions: false
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
    },
    pageTitle () {
      return this.isWaiting ? 'LIVE waiting' : ''
    },
    mainClassName () {
      return this.isWaiting ? 'screen-box__main' : ''
    }
  },
  methods: {
    onClickIncomingCall () {
      this.status = LIVE_INCOMING_CALL
    },
    onClickDeny () {
      this.status = LIVE_WAITING
    },
    onClickStart () {
      this.status = LIVE_JOINING
    },
    onClickRecord () {
    },
    onClickToggleCamera () {
    }
  }
}
</script>

<style>
.live {
  width: 100vw;
}

.waiting .information {
  opacity: 0.9;
  font-family: "Hiragino Sans";
  font-size: 14px;
  color: #E4327D;
  text-align: center;
  line-height: 24px;
  margin-bottom: 32px;
}
.waiting .live-sample {
  background: #E9EBF2;
  width: 327px;
  height: 237px;
  border-radius: 12px;
  margin: auto;
}
.waiting .live-sample p {
  font-family: "Hiragino Sans";
  font-size: 14px;
  font-weight: bold;
  color: #16171A;
  text-align: center;
  line-height: 24px;
  padding-top: 24px;
}
.waiting .live-sample .angle__to-dance,
.waiting .live-sample .angle__to-talk {
  opacity: 0.9;
  font-family: "Hiragino Sans";
  font-size: 12px;
  color: #16171A;
  letter-spacing: 0;
  text-align: center;
  line-height: 20px;
  width: 80px;
  height: 116px;
  position: relative;
}
.waiting .live-sample .angle {
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
}
.waiting .live-sample .angle__to-dance label,
.waiting .live-sample .angle__to-talk label {
  position: absolute;
  bottom: -24px;
  left: 0;
  right: 0;
}

.waiting .live-sample .angle__to-dance {
  background: url("/static/img/live-angle-to-dance.png") no-repeat;
}
.waiting .live-sample .angle__to-talk {
  background: url("/static/img/live-angle-to-talk.png") no-repeat;
}
.waiting .live-sample .angle__to-dance,
.waiting .live-sample .angle__to-talk {
  background-position: center center;
  background-size:contain;
}
.waiting .salfy {
  background: url("/static/img/live-selfy.png") no-repeat;
  background-position: center center;
  background-size:contain;
  width: 100px;
  height: 144px;
  position: absolute;
  bottom: 38px;
}


.incoming-call {
  background: url("/static/img/live-incoming-sample.png") no-repeat;
  background-position: center center;
  background-size:contain;
  background-size: cover;
  height: 100vh;
  position: relative;
  font-family: "Hiragino Sans";
  color: #FFFFFF;
}
.incoming-call p {
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  position: absolute;
  bottom: 220px;
  width: 100vw;
}
.incoming-call .live-actions {
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
  position: absolute;
  bottom: 112px;
  width: 100vw;
}
.incoming-call .live-actions .deny-action {
  background: url("/static/img/icons/icon-live-deny.png") no-repeat;
}
.incoming-call .live-actions .start-action {
  background: url("/static/img/icons/icon-live-start.png") no-repeat;
}
.incoming-call .live-actions .deny-action,
.incoming-call .live-actions .start-action {
  background-position: center center;
  background-size:contain;
  width: 72px;
  height: 72px;
  position: relative;
}
.incoming-call .live-actions .deny-action label,
.incoming-call .live-actions .start-action label {
  position: absolute;
  bottom: -24px;
  left: 0;
  right: 0;
  text-align: center;
}

.joining {
  background: url("/static/img/live-incoming-sample.png") no-repeat;
  background-position: center center;
  background-size:contain;
  background-size: cover;
  height: 100vh;
  position: relative;
}
.joining .joinig__item {
  position: absolute;
  bottom: 38px;
}
.joining .salfy {
  background: url("/static/img/live-selfy.png") no-repeat;
  background-position: center center;
  background-size:contain;
  width: 100px;
  height: 144px;
}
.joining .live-actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 16px;
  width: 100vw;
}
.joining .live-actions .live-record {
  background: url("/static/img/icons/icon-record.png") no-repeat;
}
.joining .live-actions .toggle-camera {
  background: url("/static/img/icons/icon-toggle-camera.png") no-repeat;
}
.joining .live-actions .deny-action {
  width: 72px;
  height: 72px;
  background: url("/static/img/icons/icon-live-deny.png") no-repeat;
}
.joining .live-actions .live-record,
.joining .live-actions .deny-action,
.joining .live-actions .toggle-camera {
  background-position: center center;
  background-size:contain;
}
.joining .live-actions .live-record,
.joining .live-actions .toggle-camera {
  width: 64px;
  height: 64px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
