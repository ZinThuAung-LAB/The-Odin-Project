import { Flashcard } from "./Flashcard.js";

/**
 * Project / Deck Model
 * Encapsulates a collection of flashcards with operations for card management.
 */
export class Project {
  /**
   * @param {Object} options
   * @param {string} options.name - Name of the project / study deck
   * @param {string} [options.description=''] - Optional description or topic notes
   * @param {string} [options.id] - Unique identifier
   * @param {Flashcard[]} [options.cards=[]] - Initial array of Flashcard instances or raw card data
   */
  constructor({
    name,
    description = "",
    id = typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `proj-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    cards = [],
  }) {
    if (!name || !name.trim()) {
      throw new Error("Project name cannot be empty.");
    }

    this.id = id;
    this.name = name.trim();
    this.description = description.trim();

    // Ensure all items are proper Flashcard instances
    this.cards = Array.isArray(cards)
      ? cards.map((c) => (c instanceof Flashcard ? c : Flashcard.fromJSON(c)))
      : [];
  }

  /**
   * Creates and adds a new Flashcard to this project
   * @param {string} question
   * @param {string} answer
   * @param {'easy'|'medium'|'hard'} [difficulty='medium']
   * @returns {Flashcard} The newly created Flashcard instance
   */
  addCard(question, answer, difficulty = "medium") {
    const card = new Flashcard({ question, answer, difficulty });
    this.cards.push(card);
    return card;
  }

  /**
   * Removes a flashcard from the project by its ID
   * @param {string} cardId - The unique ID of the card to remove
   * @returns {boolean} True if a card was removed, false otherwise
   */
  removeCard(cardId) {
    const initialCount = this.cards.length;
    this.cards = this.cards.filter((card) => card.id !== cardId);
    return this.cards.length < initialCount;
  }

  /**
   * Retrieves a flashcard by its ID
   * @param {string} cardId - The unique ID of the card
   * @returns {Flashcard|undefined}
   */
  getCard(cardId) {
    return this.cards.find((card) => card.id === cardId);
  }

  /**
   * Computes the number of mastered cards
   * @returns {number}
   */
  get masteredCount() {
    return this.cards.filter((c) => c.mastered).length;
  }

  /**
   * Computes the total number of cards
   * @returns {number}
   */
  get totalCount() {
    return this.cards.length;
  }

  /**
   * Computes the mastery percentage (0 - 100)
   * @returns {number}
   */
  get progressPercentage() {
    if (this.totalCount === 0) return 0;
    return Math.round((this.masteredCount / this.totalCount) * 100);
  }

  /**
   * Rehydrates a plain JSON object into a true Project instance with rehydrated Flashcards.
   * @param {Object} rawData - Plain JSON object from storage
   * @returns {Project}
   */
  static fromJSON(rawData) {
    if (!rawData) {
      throw new Error("Cannot rehydrate Project from empty data.");
    }

    const rehydratedCards = Array.isArray(rawData.cards)
      ? rawData.cards.map((c) => Flashcard.fromJSON(c))
      : [];

    return new Project({
      id: rawData.id,
      name: rawData.name,
      description: rawData.description || "",
      cards: rehydratedCards,
    });
  }

  /**
   * Serializes the Project instance and all child cards into a plain JSON-ready object.
   * @returns {Object}
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      cards: this.cards.map((card) => card.toJSON()),
    };
  }
}
