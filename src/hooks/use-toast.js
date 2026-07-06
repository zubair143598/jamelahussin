import { toast } from "sonner";

export function useToast() {
  return {
    success: (message) => toast.success(message),

    error: (message) => toast.error(message),

    info: (message) => toast.info(message),

    warning: (message) => toast.warning(message),

    loading: (message) => toast.loading(message),
  };
}