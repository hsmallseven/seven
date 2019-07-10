<template>
    <div id="box3">
        <button>特惠</button>
        <mt-button type="default" @click="go">default</mt-button>
    </div>
</template>
<script>
import { Button } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
    methods:{
        go(){
            Toast({
        message: '提示',
        position: 'bottom',
        duration: 2000
});
        },
    }
}
</script>