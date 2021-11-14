<template>
  <label class="checkbox">
    <input type="checkbox"> <span>全部</span>
  </label>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$chbx_size: 20px;
$chbx_text_gap: 10px;
$chbx_fill_color: #FFFFFF;
$chbx_border_color: #bdc6cf;
$chbx_v_Wsize: 13px;
$chbx_v_Hsize: 6px;
$chbx_v_Ypos: 5px;
$chbx_v_Xpos: 4px;
$chbx_v_color: #10CC9F;

.checkbox{
  user-select: none !important;
  input{
    display: none;
  }

  span{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    min-height: $chbx_size;
    min-width: $chbx_size;
    line-height: $chbx_size + 2;
    padding-left: $chbx_size + $chbx_text_gap;
    cursor: pointer;

    &:empty{
      padding-left: 0;
    }

    &:before{
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: $chbx_size;
      height: $chbx_size;
      background: white;
      box-shadow: inset 0 0 0 1px rgba($chbx_border_color,1);
      border-radius: 3px;
    }

    &:after{
      content: '';
      display: block;
      width: $chbx_v_Wsize;
      height: $chbx_v_Hsize;
      position: absolute;
      top: $chbx_v_Ypos;
      left: $chbx_v_Xpos;
      border: 1px solid;
      border-color: transparent transparent $chbx_v_color $chbx_v_color;
      transform: scale(5) rotate(-45deg);
      opacity: 0;
      pointer-events: none;
       box-shadow: inset 0 0 0 1px rgba($chbx_border_color,1);
      border-radius: 3px;
    }

  }

  input:checked + span{
    &:after{
      opacity: 1;
      border-color: transparent transparent $chbx_v_color $chbx_v_color;
      box-shadow: inset 1px -1px 0 $chbx_v_color;
      transform: scale(1) rotate(-45deg);
    }
    &:before{
      // box-shadow: inset 0 0 0 1px rgba($chbx_border_color,0);
      background: rgba($chbx_fill_color, 1);
    }
  }

}
</style>
