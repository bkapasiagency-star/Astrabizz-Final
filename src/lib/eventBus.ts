/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/** Tiny window-level pub/sub so the Navbar mega menus can open a specific
 *  Service or Industry detail modal directly, without lifting state up
 *  through the whole component tree. */

export const OPEN_SERVICE_EVENT = 'astrabizz:open-service';
export const OPEN_INDUSTRY_EVENT = 'astrabizz:open-industry';

export function openServiceDetail(id: string) {
  window.dispatchEvent(new CustomEvent<string>(OPEN_SERVICE_EVENT, { detail: id }));
}

export function openIndustryDetail(id: string) {
  window.dispatchEvent(new CustomEvent<string>(OPEN_INDUSTRY_EVENT, { detail: id }));
}
