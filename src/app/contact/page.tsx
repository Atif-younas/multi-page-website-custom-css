import '../../app/styles/contact.css';
export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <h1 className="contact-title">Contact Page!</h1>
      <br />
      <h2 className="contact-subtitle">I Have made 3 Sec loading on Contact Page</h2>
      <p className="contact-paragraph">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quia
        quaerat, perspiciatis iure non aperiam eos, dolorem pariatur cupiditate
        eveniet at officiis natus odit consectetur tempore dolores nemo delectus
        officia. Corrupti rerum voluptatibus a cupiditate illo totam, eos
        doloribus, nam deleniti saepe fugit. Consectetur corporis repellat
        molestias harum accusantium, expedita tempora repellendus magnam
        architecto quas porro quis. Nihil, libero ad. Inventore optio rerum
        quaerat omnis officia a nihil, asperiores assumenda natus cupiditate
        quidem,
      </p>
    </div>
  );
}
