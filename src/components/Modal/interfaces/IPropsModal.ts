import React, { Dispatch, SetStateAction } from "react";

export interface IPropsModal {
  headerTitle: string;
  children: React.ReactNode;
  widthSize?: string;
  heightSize?: string;
  isOpen: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}
