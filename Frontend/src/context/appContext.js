import { io } from "socket.io-client";
import React from "react";
const SOCKET_URL = "http://192.46.209.63:84";
export const socket = io(SOCKET_URL);
// app context
export const AppContext = React.createContext();
