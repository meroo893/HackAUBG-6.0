export default function Footer() {
  return (
    <div className="footer mx-auto max-w-7xl px-4 py-8 bg-slate-400">
      <div className="flex justify-between">
        <div>
          <h3 className="footer-title font-bold text-lg mb-4">Services</h3>
          <a className="link-hover block hover:text-blue-500 mb-2">Branding</a>
          <a className="link-hover block hover:text-blue-500 mb-2">Design</a>
          <a className="link-hover block hover:text-blue-500 mb-2">Marketing</a>
          <a className="link-hover block hover:text-blue-500 mb-2">
            Advertisement
          </a>
        </div>
        <div>
          <h3 className="footer-title font-bold text-lg mb-4">Company</h3>
          <a className="link-hover block hover:text-blue-500 mb-2">About us</a>
          <a className="link-hover block hover:text-blue-500 mb-2">Contact</a>
          <a className="link-hover block hover:text-blue-500 mb-2">Jobs</a>
          <a className="link">Press kit</a>
        </div>
        <div>
          <h3 className="footer-title font-bold text-lg mb-4">Legal</h3>
          <a className="link-hover block hover:text-blue-500 mb-2">
            Terms of use
          </a>
          <a className="link-hover block hover:text-blue-500 mb-2">
            Privacy policy
          </a>
          <a className="link-hover block hover:text-blue-500 mb-2">
            Cookie policy
          </a>
        </div>
      </div>
    </div>
  );
}
