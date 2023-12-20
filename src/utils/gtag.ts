type SendTagEventParams = {
  action: string;
  category?: string;
  label?: string;
  value?: string;
};

export const sendTagEvent = ({
  action,
  category,
  label,
  value,
}: SendTagEventParams) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
