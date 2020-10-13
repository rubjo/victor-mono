<template>
  <div class="content alternate-bg">
    <div
      id="faq"
      class="scroll-head"
    />
    <el-row>
      <el-col>
        <h1
          class="centre"
          @mouseenter="revealFaq = true"
          @touchstart="revealFaq = true"
          @mouseleave="revealFaq = false"
        >
          <em>FAQ*</em>
        </h1>
        <transition name="el-zoom-in-top">
          <div
            class="caption centre full-width"
          >
            &nbsp;
            <em v-show="revealFaq">Frequently Anticipated Questions</em>
          </div>
        </transition>
      </el-col>
    </el-row>
    <el-row
      type="flex"
      justify="center"
    >
      <el-col
        :xs="22"
        :sm="18"
      >
        <VueFaqAccordion
          :items="faqItems"
          border-color="transparent"
        />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import VueFaqAccordion from 'vue-faq-accordion'

export default {
  name: 'Credits',
  components: {
    VueFaqAccordion
  },
  data () {
    return {
      revealFaq: false,
      faqItems: [
        {
          title: 'There’s a feature of the font that I don’t like. Could you change it?',
          value: 'Probably not. You can always use a different font. 😛 (Or <a href="https://github.com/rubjo/victor-mono/issues/new" target="_blank">open an issue</a> and describe what needs changing.)',
          category: 'Design & features'
        }, {
          title: 'Will you add some stylistic variations, like a slashed zero, sharper brackets etc.?',
          value: '<a href="https://paypal.me/runbjo" target="_blank">I might</a>.',
          category: 'Design & features'
        }, {
          title: 'Will you make a custom style generator, where one can pick the preferred stylistic alternatives and download the corresponding font files?',
          value: 'Probably not. It depends on the reception and <a href="https://paypal.me/runbjo" class="donate" target="_blank">donations</a>, as this is something I do in my spare time.',
          category: 'Design & features'
        }, {
          title: 'Can I use the font for anything?',
          value: 'Yes. If you\'d like to say thanks, you can <a href="https://paypal.me/runbjo" class="donate" target="_blank">donate</a>. I\'d also appreciate it if you referred others to this web site rather than serving the font files from elsewhere.',
          category: 'Usage'
        }, {
          title: 'I found a bug. Where do I report it?',
          value: 'Please <a href="https://github.com/rubjo/victor-mono/issues/new" target="_blank">open an issue</a>.',
          category: 'Usage'
        }, {
          title: 'Since it’s called Victor Mono, will a Victor Sans or Serif be released in the future?',
          value: 'Probably not.',
          category: 'Other'
        }, {
          title: 'How does one simply make a font?',
          value: 'Trial and error, some research, good software, patience and time.',
          category: 'Other'
        }, {
          title: 'Why are you giving it away?',
          value: 'I originally planned on selling it for some (smaller or much larger) sum, like others do. But I eventually decided against it: I couldn’t be bothered to set up hosting, payment, EULAs etc, nor do I have time for the level of support I feel should accompany a commercial product. This typeface isn’t meant to be the perfect font for anyone - I just made the one perfect for me. If you’re unemployed or struggle to make ends meet, download the font with a clear conscience. If you work in a corporate setting or are relatively well off, consider <a href="https://paypal.me/runbjo" class="donate" target="_blank">supporting</a> the hours spent designing this font. If you want to and are able to donate anything: thank you!',
          category: 'Other'
        }, {
          title: 'Did you know that the [insert typeface property here] violates some 500-year old font design convention?',
          value: 'I might. If I did, I didn’t care, or I deliberately chose to go a different direction.',
          category: 'Design & features'
        }, {
          title: 'The font is missing an obscure ligature symbol used for indicating an infinite loop in the language Goskell when writing in ancient Ghiscari. Would you be willing to add it?',
          value: 'Not very likely, but <a href="https://paypal.me/runbjo" target="_blank">I might</a>.',
          category: 'Design & features'
        }, {
          title: 'A programming font with cursive italics and ligatures is the worst idea in the world. This is absolutely horrible. BTW, I am really angry.',
          value: 'Not really a question, but anyway: People actually like different things. And it\'s OK. It\'s OK if someone else prefers a different font for code than you do. We don\'t have to use the same one. ❤️',
          category: 'Design & features'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .content section.faq {
    padding: 0;
    font-size: calc(1.1rem + 0.4vw);
    .faq-wrapper {
      max-width: none;
      .faq__nav-item {
        font-weight: inherit;
        color: inherit;
        transition: inherit;
        &.faq__nav-item_active {
          font-style: italic;
        }
        &:hover {
          color: var(--color-text-accented);
        }
      }
      .accordion__toggle-button[data-v-36e025b4] {
        &::before,
        &::after {
          background: var(--color-text-primary);
          transition: background 1s;
        }
      }
      .accordion__title {
        padding: 20px 0 10px 0;
        color: inherit;
        transition: inherit;
        &:hover {
          color: var(--color-text-accented);
          .accordion__toggle-button[data-v-36e025b4] {
            &::before,
            &::after {
              background: var(--color-text-primary);
            }
          }
        }
        button {
          padding-left: 20px;
          margin-left: 5vw;
          &::before,
          &::after {
            background: var(--color-text-primary);
          }
        }
      }
      .accordion__value {
        padding: 0 25px 25px 75px;
        line-height: calc(2rem + 1vw);
        color: inherit;
      }
    }
  }
</style>
