import { ref } from "vue";

export function useClipBoard(){
  const isCopied = ref(false);
  const error = ref(null);
  const notifyDuration = ref(1500);

  const copy = async (text) => {
    isCopied.value = false;
    error.value = false;

    try {
      await navigator.clipboard.writeText(text);
      isCopied.value = true;
    } catch (error) {
      error.value = error;
      console.error(error.message);
    }
    finally{
      setTimeout(()=>{
        isCopied.value = false;
      }, notifyDuration.value);
    }
  }

  return { isCopied, error, notifyDuration, copy };
}
