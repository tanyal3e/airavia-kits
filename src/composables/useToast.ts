import { ref } from "vue";

type ToastType = "info" | "success" | "warning" | "error";
type ToastItem = { id: number; type: ToastType; message: string };

let counter = 0;
export const toasts = ref<ToastItem[]>([]);

function push(type: ToastType, message: string) {
  const id = ++counter;
  toasts.value.push({ id, type, message });
  setTimeout(() => {
    toasts.value = toasts.value.filter((t) => t.id !== id);
  }, 3500);
  return id;
}

export const toast = {
  info: (message: string) => push("info", message),
  success: (message: string) => push("success", message),
  warning: (message: string) => push("warning", message),
  error: (message: string) => push("error", message),
};
