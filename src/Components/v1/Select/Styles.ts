export function getListPositionStyles(hasTextMessage?: string) {
  if (hasTextMessage) {
    return "top-[calc(100%-0.875rem)] bottom-[unset]"
  }

  return "top-full"
}
