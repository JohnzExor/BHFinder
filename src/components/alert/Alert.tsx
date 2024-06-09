"use client";

import { toast } from "../ui/use-toast";

export const ToastWithTitle = (description: string) =>
  toast({ title: "Notification", description: description });
