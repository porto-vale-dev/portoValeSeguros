import {
  AppFrame,
  Faq,
  SimulatorProgress,
  SimulatorProvider,
  SimulatorShell,
} from "@/features/emprestimo";

/**
 * LP do simulador de empréstimo com garantia de veículo.
 *
 * A página permanece Server Component: apenas monta a feature. O estado fica
 * dentro de `SimulatorProvider`; o painel lateral, a topbar e o FAQ são
 * renderizados no servidor.
 */
export default function SimuladorPage() {
  return (
    <SimulatorProvider>
      <AppFrame progress={<SimulatorProgress />}>
        <SimulatorShell faq={<Faq />} />
      </AppFrame>
    </SimulatorProvider>
  );
}
