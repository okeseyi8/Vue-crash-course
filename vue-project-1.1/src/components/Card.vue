<script setup>
 import { defineProps } from 'vue';

 defineProps(
    {
        bg: {
            type: String,
            default: "bg-green-200"
        }
    }
 );
 
</script>
<template>
    <div :class="`${bg} p-6 rounded-lg shadow-md mb-10` ">
        <slot></slot>
    </div>
</template>