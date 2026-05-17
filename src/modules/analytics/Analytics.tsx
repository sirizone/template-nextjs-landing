import cfg from "../../../sirizone.config.json";
export default function Analytics() {
  const id = cfg.content?.analytics_id;
  if (!id) return null;
  return <script defer data-domain={id} src="https://plausible.io/js/plausible.js" />;
}
