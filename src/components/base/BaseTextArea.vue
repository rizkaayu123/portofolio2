<script>
export default{
    name: 'TextArea',
    emits: ['update:modelValue'],
    props: {
        name: String,
        label: String,
        modelValue: String,
        type:{
            type:String,
            default: 'text',
        } 
    },
};
</script>

<template>
<div class="mb-4">
    <label :for="name" class="form-label">{{ label }} </label>
       <textarea class="form-control" :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="name" />
</div>
</template>

