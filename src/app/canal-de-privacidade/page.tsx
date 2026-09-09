import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Mail, Shield, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Canal de Privacidade | Porto Vale Seguros",
  description:
    "Saiba como exercer seus direitos de titular de dados pessoais junto à Porto Vale, em conformidade com a LGPD.",
};

const PRIVACY_EMAIL = "privacidade@portovaleconsorcios.com.br";
// Subject decodifica para "Solicitação de Direitos do Titular - LGPD"
const MAILTO_HREF = `mailto:${PRIVACY_EMAIL}?subject=Solicita%C3%A7%C3%A3o%20de%20Direitos%20do%20Titular%20-%20LGPD`;

export default function CanalDePrivacidadePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 bg-muted/30 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShieldCheck aria-hidden="true" strokeWidth={1.5} className="h-7 w-7" />
            </span>
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">Canal de Privacidade</h1>
            <p className="mt-2 text-muted-foreground">
              Bem-vindo ao canal de solicitação de direitos do Titular.
            </p>
          </div>

          <Card className="mb-6">
            <CardContent className="pt-6 text-sm leading-relaxed text-muted-foreground">
              <p>
                Se você deseja consultar, corrigir, atualizar, eliminar, bloquear comunicações ou
                solicitar informações sobre o tratamento dos seus dados pessoais, envie um e-mail
                para{" "}
                <a
                  href={`mailto:${PRIVACY_EMAIL}`}
                  className="font-semibold text-primary hover:underline"
                >
                  {PRIVACY_EMAIL}
                </a>
                .
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                Como enviar sua solicitação
              </h2>
              <ol className="mb-5 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                <li>Informe seus dados de identificação e contato;</li>
                <li>Informe o direito ou solicitação desejada;</li>
                <li>Descreva, de forma clara, o que deseja solicitar;</li>
                <li>Envie o e-mail para análise.</li>
              </ol>
              <Button asChild>
                <a href={MAILTO_HREF}>
                  <Mail aria-hidden="true" />
                  Enviar solicitação por e-mail
                </a>
              </Button>
            </CardContent>
          </Card>

          <Alert className="mb-6 border-accent/40 bg-accent/10">
            <Shield aria-hidden="true" className="h-4 w-4 !text-accent" />
            <AlertDescription>
              <p>
                <strong className="font-semibold text-foreground">Importante:</strong> para
                proteger seus dados pessoais, poderemos solicitar informações adicionais para
                confirmar sua identidade antes de atender à solicitação.
              </p>
            </AlertDescription>
          </Alert>

          <Card>
            <CardContent className="pt-6 text-sm leading-relaxed text-muted-foreground">
              <p>
                Após o envio, a solicitação será analisada pela Porto Vale e o retorno será
                realizado pelos canais de atendimento, observados os prazos e condições previstos
                na legislação aplicável.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
