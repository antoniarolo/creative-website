const profiles = [
  { name: 'Wendy Loves This', handle: '@wendylovesthis2', url: 'https://www.instagram.com/wendylovesthis2/' },
  { name: 'Tenth of June', handle: '@tenth_of_june_shop', url: 'https://www.instagram.com/tenth_of_june_shop/' },
]

export default function Contact() {
  return (
    <section id="contact" className="website-section contact-section" aria-labelledby="contact-heading">
      <div className="website-section-inner">
        <p className="section-eyebrow">Contact</p>
        <h2 id="contact-heading">Find us on Instagram.</h2>
        <p className="section-description">Follow along or get in touch through each shop’s Instagram profile.</p>
        <div className="website-grid">
          {profiles.map(profile => (
            <a key={profile.handle} className="instagram-link" href={profile.url} target="_blank" rel="noopener noreferrer" aria-label={`${profile.name} on Instagram (opens in a new tab)`}>
              <span className="instagram-name">{profile.name}</span>
              <span>{profile.handle} <span aria-hidden="true">↗</span></span>
              <span className="new-tab-note">Opens in a new tab</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
