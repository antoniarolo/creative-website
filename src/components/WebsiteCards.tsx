import { motion } from 'framer-motion'

const websites = [
  {
    name: 'Wendy Loves This',
    url: 'https://wendylovesthis.com/',
    domain: 'wendylovesthis.com',
    category: 'Resort wear & favorite finds',
    description: 'Explore easy, resort-ready clothing, hand block prints, and accessories.',
    theme: 'wendy',
  },
  {
    name: 'Tenth of June',
    url: 'https://tenthofjune.shop/',
    domain: 'tenthofjune.shop',
    category: 'Home, style & everyday living',
    description: 'Discover thoughtfully selected home pieces, apparel, jewelry, and gifts.',
    theme: 'june',
  },
]

export default function WebsiteCards() {
  return (
    <section id="about" className="website-section" aria-labelledby="websites-heading">
      <div className="website-section-inner">
        <p className="section-eyebrow">About</p>
        <h2 id="websites-heading">Two places to discover.</h2>
        <p className="section-description">A little inspiration for your wardrobe, your home, and the everyday.</p>
        <div className="website-grid">
          {websites.map((website, index) => (
            <motion.a
              key={website.domain}
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`website-card ${website.theme}`}
              aria-label={`Explore ${website.name} (opens in a new tab)`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="website-preview" aria-hidden="true">
                <span className="preview-label">{website.category}</span>
                <span className="preview-title">{website.name}</span>
                <span className="preview-domain">{website.domain}</span>
              </div>
              <div className="website-card-body">
                <h3>{website.name}</h3>
                <p>{website.description}</p>
                <span className="website-card-link">Visit website <span aria-hidden="true">↗</span></span>
                <span className="new-tab-note">Opens in a new tab</span>
              </div>
            </motion.a>
          ))}
        </div>
        <p className="website-attribution">Independent websites, linked for educational exploration. All brand names belong to their respective owners.</p>
      </div>
    </section>
  )
}
