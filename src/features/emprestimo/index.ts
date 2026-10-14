/**
 * Superfície pública da feature do simulador.
 *
 * O restante da aplicação consome apenas o que está aqui: os detalhes de
 * domínio, schemas, serviços e etapas ficam internos à feature.
 */
export { AppFrame } from "./components/AppFrame";
export { Faq } from "./components/Faq";
export { LeadCompletedTracker } from "./components/LeadCompletedTracker";
export { SimulatorProgress } from "./components/SimulatorProgress";
export { SimulatorProvider } from "./components/SimulatorProvider";
export { SimulatorShell } from "./components/SimulatorShell";
export { simulatorContent } from "./content/simulator-content";
export { LP_PATH, LP_SLUG } from "./constants/simulator.constants";
