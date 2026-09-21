/*
 * Configuração pública do site CivilSkills.
 *
 * Este é um site estático (HTML puro, sem build/bundler), então não existe
 * um passo de build que injete variáveis de ambiente no navegador. Este
 * arquivo é a fonte real dos valores usados pela página em tempo de
 * execução — edite os valores abaixo diretamente antes de publicar.
 *
 * Veja também o arquivo .env.example, que documenta o nome de cada valor
 * para referência (ex.: ao integrar isso a um pipeline que gere este
 * arquivo automaticamente no futuro).
 *
 * Enquanto um valor estiver como null, a funcionalidade correspondente
 * fica desativada com segurança (o Pixel não é inicializado, e os botões
 * de checkout apontam para a seção de preços em vez de um link quebrado).
 */
window.CIVILSKILLS_CONFIG = {
  // ID do Meta Pixel. Corresponde a META_PIXEL_ID no .env.example.
  metaPixelId: "1795534648134308",

  // URL de checkout do Pacote Simples (R$10), criada na Mivvo. Corresponde a CHECKOUT_URL_SIMPLES.
  checkoutUrlSimples: "https://app.mivvo.com.br/checkout/9e693ed2-47ef-4f29-a00b-9c3bfe5e4742",

  // URL de checkout do Pacote Completo (R$27,90), criada na Mivvo. Corresponde a CHECKOUT_URL_COMPLETO.
  checkoutUrlCompleto: "https://app.mivvo.com.br/checkout/7984bb8e-2a40-476d-9a2a-883f88c6976a"
};
