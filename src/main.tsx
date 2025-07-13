import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <App />
        </PersistGate>
    </Provider>
);
