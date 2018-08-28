<template>
  <section>
    <BaseLayout>
      <template slot="header">
        <h1>Here might be a page title</h1>
      </template>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
      <template slot="footer">
        <p>Here's some contact info</p>
      </template>
    </BaseLayout>
    <DefaultSlot/>
    <DefaultSlot>
      <template>
        自定义
      </template>
    </DefaultSlot>
    <ScopedSlot :scopedValue="scopedValue">
      <template slot-scope="slotProps">
        {{slotProps.named}}
      </template>
    </ScopedSlot>
  </section>
</template>

<script>
  import BaseLayout from './BaseLayout'
  import DefaultSlot from './DefaultSlot'
  import ScopedSlot from './ScopedSlot'

  export default {
    name: "SlotComponent",
    components: {
      BaseLayout,
      DefaultSlot,
      ScopedSlot
    },
    data() {
      return {
        scopedValue: {
          name:"朱一龙"
        }
      }
    }
  }
</script>

<style scoped>

</style>
