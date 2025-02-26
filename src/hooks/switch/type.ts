export type UseSwitchShape = {
    isOn: () => void;
    isOff: () => void;
    toggleSwitch: () => void;
    switchValue: boolean;
  };