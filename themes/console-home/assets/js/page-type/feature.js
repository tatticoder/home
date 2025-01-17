document.addEventListener("DOMContentLoaded", (event) => {
    /* adjust select width */
    let adjustSelectWidth = (e, el) => {
        let s = e?.target || el;
        let selectedText = s.options[s.selectedIndex].text;
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        context.font = "16px Rubik";
        if (s.classList.contains("console-input-medium")) {
            context.font = "14px Rubik";
        }
        if (s.classList.contains("console-input-small")) {
            context.font = "13px Rubik";
        }
        var metrics = context.measureText(selectedText);
        var pad = parseInt(getComputedStyle(s).paddingLeft) + parseInt(getComputedStyle(s).paddingRight);
        s.style.width = pad + metrics.width + 8 + "px";
    };
    let selects = document.getElementsByClassName("console-select");
    for (let s of selects) {
        s.addEventListener("change", adjustSelectWidth);
        adjustSelectWidth(null, s);
    }

    /* manage aside content responsiveness */
    let asideWrappers = document.querySelectorAll("[data-aside-wrapper]");
    let setAsideVisibility = () => {
        asideWrappers.forEach((w) => {
            if (window.innerWidth >= 1025) {
                w.classList.remove("is-hidden");
            } else {
                w.classList.add("is-hidden");
            }
        });
    };
    setAsideVisibility();
    window.addEventListener("resize", setAsideVisibility);

    if (document.body.classList.contains("page-podcast")) {
        /* manage season info position */
        let contentSplits = document.querySelectorAll("[data-content-split]");
        let setPos = () => {
            contentSplits.forEach((split) => {
                let el = split.querySelector("[data-aside-content]");
                let asideContentWrapper = split.querySelector("[data-aside-content-wrapper]");
                let inlineWrapper = split.querySelector("[data-inline-aside-content-wrapper]");
                let trailerEl = el.querySelector("[data-trailer-player]");
                if (window.innerWidth >= 1025) {
                    if (!inlineWrapper.classList.contains("player-prepended")) {
                        el.insertBefore(trailerEl, el.firstChild);
                        asideContentWrapper.appendChild(el);
                        inlineWrapper.classList.add("is-hidden");
                        inlineWrapper.classList.add("player-prepended");
                    }
                } else {
                    if (inlineWrapper.classList.contains("player-prepended")) {
                        el.appendChild(trailerEl);
                        inlineWrapper.appendChild(el);
                        inlineWrapper.classList.remove("is-hidden");
                        inlineWrapper.classList.remove("player-prepended");
                    }
                }
            });
        };
        setPos();
        window.addEventListener("resize", setPos);
    }

    if (document.body.classList.contains("page-tools") || document.body.classList.contains("page-betas") || document.body.classList.contains("page-profiles")) {
        let asideContentWrapper = document.querySelector("[data-aside-content-wrapper]");

        /* manage CTA position */
        let ctaEl = document.querySelector("[data-feature-cta]").querySelector(".subscribe-cta");
        let inlineCTAWrapper = document.querySelector("[data-inline-cta-wrapper]");
        let inlineCTAWrapperCollapsible = inlineCTAWrapper.querySelector("[data-collapsible-content]");
        let setCTAPos = () => {
            let title = ctaEl.querySelector(".title");
            let input = ctaEl.querySelector(".console-input-text");
            let button = ctaEl.querySelector(".console-button");
            if (window.innerWidth >= 1025) {
                ctaEl.classList.remove("layout-wide", "size-medium");
                ctaEl.classList.add("layout-small", "size-small", "sidebar");
                title.classList.remove("title-4");
                title.classList.add("title-5");
                input.classList.remove("console-input-medium");
                input.classList.add("console-input-small");
                button.classList.remove("console-button-medium");
                button.classList.add("console-button-small");
                asideContentWrapper.insertBefore(ctaEl, asideContentWrapper.firstChild);
                inlineCTAWrapper.classList.add("is-hidden");
            } else {
                ctaEl.classList.add("layout-wide", "size-medium");
                ctaEl.classList.remove("layout-small", "size-small", "sidebar");
                title.classList.add("title-4");
                title.classList.remove("title-5");
                input.classList.add("console-input-medium");
                input.classList.remove("console-input-small");
                button.classList.add("console-button-medium");
                button.classList.remove("console-button-small");
                inlineCTAWrapperCollapsible.appendChild(ctaEl);
                inlineCTAWrapper.classList.remove("is-hidden");
            }
        };
        setCTAPos();
        window.addEventListener("resize", setCTAPos);

        /* manage filters position */
        let filtersEl = document.querySelector("[data-feature-filters]");
        let inlineFiltersWrapper = document.querySelector("[data-inline-filters-wrapper]");
        let inlineFiltersWrapperCollapsible = inlineFiltersWrapper.querySelector("[data-collapsible-content]");
        let setFiltersPos = () => {
            if (window.innerWidth >= 1025) {
                asideContentWrapper.appendChild(filtersEl);
                inlineFiltersWrapper.classList.add("is-hidden");
            } else {
                inlineFiltersWrapperCollapsible.appendChild(filtersEl);
                inlineFiltersWrapper.classList.remove("is-hidden");
            }
        };
        setFiltersPos();
        window.addEventListener("resize", setFiltersPos);

        /* compute aside content position */
        let scrollWrapper = document.querySelector("[data-scroll-wrapper]");
        let contentBottomPadding = parseInt(getComputedStyle(document.querySelector("[data-content-wrapper]")).paddingBottom);
        let footerHeight = document.querySelector("[data-footer]").getBoundingClientRect().height;
        let safetyBottomOffset = contentBottomPadding + footerHeight + 48;
        asideContentHeight = asideContentWrapper.getBoundingClientRect().height;
        let splitWrapper = document.querySelector("[data-content-split]");

        let style = {};
        let compute = function () {
            let contentHeight = scrollWrapper.offsetHeight;
            let bottomScrollPos = window.innerHeight + Math.ceil(window.pageYOffset);
            let distanceFromPageBottom = contentHeight - bottomScrollPos;
            if (window.scrollY > 0) {
                style.position = null;
                style.marginTop = null;
                style.paddingTop = null;
                let topOffset = document.querySelector("[data-aside-anchor]").getBoundingClientRect().top;
                style.top = null;
                style.overflow = null;
                if (parseInt(topOffset) < 128) {
                    style.position = "fixed";
                    style.top = 0;
                    style.marginTop = "100px";
                    style.paddingTop = "28px";
                    style.overflow = "auto";
                    if (splitWrapper) {
                        let asideStyle = getComputedStyle(asideContentWrapper);
                        let asideMarginsAndPaddings = parseInt(asideStyle.getPropertyValue("padding-top")) + parseInt(asideStyle.getPropertyValue("margin-top")) + parseInt(asideStyle.getPropertyValue("padding-bottom")) + parseInt(asideStyle.getPropertyValue("margin-bottom"));
                        let minContentHeight = window.innerHeight - asideMarginsAndPaddings;
                        splitWrapper.style.minHeight = minContentHeight + "px";
                    }
                } else {
                    asideContentWrapper.scrollTop = 0;
                }
            } else {
                style.position = null;
                style.top = null;
                style.marginTop = null;
                style.paddingTop = null;
                style.overflow = null;
            }

            let enoughHeight = safetyBottomOffset + asideContentHeight + parseInt(style.marginTop);
            if (window.innerHeight < enoughHeight) {
                if (distanceFromPageBottom < safetyBottomOffset) {
                    style.marginBottom = safetyBottomOffset - distanceFromPageBottom + "px";
                } else {
                    style.marginBottom = null;
                }
            } else {
                style.marginBottom = null;
            }

            asideContentWrapper.style.position = style.position;
            asideContentWrapper.style.top = style.top;
            asideContentWrapper.style.marginTop = style.marginTop;
            asideContentWrapper.style.paddingTop = style.paddingTop;
            asideContentWrapper.style.marginBottom = style.marginBottom;
            asideContentWrapper.style.overflow = style.overflow;
        };
        compute();
        window.addEventListener("scroll", compute);
        window.addEventListener("resize", compute);
    }
});

class Sections {
    constructor() {
        this.hiddenClass = {
            buttons: "is-hidden-by-buttons",
            search: "is-hidden-by-search",
            generic: "is-hidden",
        };
        this.wrapper = document.querySelector("[data-main-content-wrapper]");
        this.filterables = this.getFilterables();
        this.sortables = this.getSortables();
        this.groupables = this.getGroupables();
    }

    getFilterables() {
        let filterables = [];
        let els = document.querySelectorAll("[data-feature-items-section]");
        for (const el of els) {
            let items = el.querySelectorAll("[data-card]");
            let filterable = {
                section: el,
                items: items,
            };
            filterables.push(filterable);
        }
        return filterables;
    }

    getSortables() {
        let sortables = [];
        let els = document.querySelectorAll("[data-feature-items]");
        for (const el of els) {
            let items = el.querySelectorAll("[data-card]");
            let sortable = {
                container: el,
                items: items,
            };
            sortables.push(sortable);
        }
        return sortables;
    }

    getGroupables() {
        return document.querySelectorAll("[data-card]");
    }

    filter(by, item, isIn) {
        if (isIn) {
            item.classList.remove(this.hiddenClass[by]);
        } else {
            item.classList.add(this.hiddenClass[by]);
        }
    }

    updateSectionsCount() {
        for (let f of this.filterables) {
            let visibleItems = Array.prototype.slice.call(f.items).filter((i) => {
                return !(i.classList.contains(this.hiddenClass.buttons) || i.classList.contains(this.hiddenClass.search));
            });
            let visibleCardsCount = visibleItems.length;
            let count = f.section.querySelector("[data-feature-items-count]");
            if (visibleCardsCount == 0) count.innerHTML = "";
            else count.innerHTML = "(" + visibleCardsCount + ")";
        }
    }

    updateSectionEmptyPlaceholderVisibility() {
        for (let f of this.filterables) {
            let visibleItems = Array.prototype.slice.call(f.items).filter((i) => {
                return !(i.classList.contains(this.hiddenClass.buttons) || i.classList.contains(this.hiddenClass.search));
            });
            let visibleCardsCount = visibleItems.length;

            let emptyPlaceholder = f.section.querySelector("[data-feature-card-empty-placeholder]");
            if (visibleCardsCount <= 0) {
                emptyPlaceholder.classList.remove(this.hiddenClass.generic);
            } else {
                emptyPlaceholder.classList.add(this.hiddenClass.generic);
            }
        }
    }

    replaceSorted(items, container) {
        let emptyPlaceholder = container.querySelector("[data-feature-card-empty-placeholder]");
        container.innerHTML = "";
        items.forEach((item) => {
            container.appendChild(item);
        });
        // add back empty placeholder dom
        container.appendChild(emptyPlaceholder);
    }

    rebuildSectionsWithData(data, by) {
        let sectionTemplate = this.filterables[0].section;
        for (let s of this.filterables) {
            s.section.remove();
        }

        for (const sect of data) {
            let newSection = sectionTemplate.cloneNode(true);
            newSection.querySelector("[data-feature-section-name]").innerHTML = sect.name;

            let viewAllLink = newSection.querySelector("[data-view-all-link]");
            if (viewAllLink) {
                viewAllLink.href = sect.viewAllLink.href;
                if (sect.viewAllLink.isHidden) viewAllLink.classList.add(this.hiddenClass.generic);
                else viewAllLink.classList.remove(this.hiddenClass.generic);
            }

            // empties section and fills back with new section cards
            let itemsEl = newSection.querySelector("[data-feature-items]");
            let emptyPlaceholder = newSection.querySelector("[data-feature-card-empty-placeholder]");
            itemsEl.innerHTML = "";

            for (let item of sect.items) {
                itemsEl.appendChild(item);
            }
            itemsEl.appendChild(emptyPlaceholder);

            this.wrapper.appendChild(newSection);
        }

        this.filterables = this.getFilterables();
        this.sortables = this.getSortables();

        this.updateSectionsCount();
        this.updateSectionEmptyPlaceholderVisibility();
    }

    public() {
        return {
            getFilterables: () => {
                return this.filterables;
            },
            filter: (by, item, isIn) => {
                this.filter(by, item, isIn);
            },
            filteringDone: () => {
                this.updateSectionsCount();
                this.updateSectionEmptyPlaceholderVisibility();
            },
            getSortables: () => {
                return this.sortables;
            },
            replaceSorted: (items, container) => {
                this.replaceSorted(items, container);
            },
            getGroupables: () => {
                return this.groupables;
            },
            rebuildWithData: (data, by) => {
                this.rebuildSectionsWithData(data, by);
            },
        };
    }
}

class Filter {
    constructor(sections) {
        this.sections = sections;
        this.form = document.querySelector("[data-feature-filters-form]");
        this.toggles = this.form.querySelectorAll("[data-filter='toggle']");
        this.buttonSelectAll = this.form.querySelector("[data-filter='select-all']");
        this.collapsedInfo = document.querySelector("[data-inline-filters-wrapper] [data-box-collapsible-info]");
        this.collapsedTitle = document.querySelector("[data-inline-filters-wrapper] [data-box-collapsible-title]");
        this.initialCollapsedTitle = this.collapsedTitle.innerHTML;
        this.searchTerm = "";
        this.dictionary = {
            tag: ["tag", "tags"],
            category: ["category", "categories"],
            tech: ["tech", "techs"],
        };
        this.bindActions();
        this.selectAll();
    }

    bindActions() {
        this.toggles.forEach((t) => {
            t.willGoSolo = true;
            t.addEventListener("click", this.toggledCheck.bind(this));
        });
        this.buttonSelectAll.addEventListener("click", this.selectAll.bind(this));
    }

    toggledCheck(e) {
        this.checkFirstClicked(e);
        this.checkFullGroup(e);
        this.checkEmptyGroup();
        this.setButtonsAllVisibility();
        this.updateInfo();
        this.filter();

        // triggers marked-scrollable borders
        window.dispatchEvent(new Event("resize"));
    }

    selectAll(e) {
        if (e) e.preventDefault();
        for (let t of this.toggles) {
            t.checked = true;
            t.willGoSolo = true;
        }
        this.setButtonsAllVisibility();
        this.updateInfo();
        this.filter();

        // triggers marked-scrollable borders
        window.dispatchEvent(new Event("resize"));
    }

    checkFullGroup(e) {
        const toggle = e.currentTarget;
        let activeFilterValues = this.getActiveFilterValues().byGroup;
        let allTogglesForGroup = Array.prototype.slice.call(this.toggles);
        allTogglesForGroup = allTogglesForGroup.filter((t) => t.dataset.filterGroup == toggle.dataset.filterGroup);
        if (activeFilterValues[toggle.dataset.filterGroup].length == allTogglesForGroup.length) {
            for (let t of allTogglesForGroup) {
                t.willGoSolo = true;
            }
        }
    }

    checkFirstClicked(e) {
        const toggle = e.currentTarget;
        if (toggle.willGoSolo) {
            for (let t of this.toggles) {
                if (t.dataset.filterGroup == toggle.dataset.filterGroup) {
                    if (t == toggle) t.checked = true;
                    else t.checked = false;
                    t.willGoSolo = false;
                }
            }
        }
    }

    checkEmptyGroup() {
        let activeFilterValues = this.getActiveFilterValues().byGroup;
        Object.keys(activeFilterValues).forEach((group) => {
            if (activeFilterValues[group].length == 0) {
                for (let t of this.toggles) {
                    t.willGoSolo = true;
                    if (t.dataset.filterGroup == group) t.checked = true;
                }
            }
        });
    }

    setButtonsAllVisibility() {
        let totalActiveFilters = this.getActiveFilterValues().all.length;
        let totalFilters = this.toggles.length;
        this.form.classList.remove("is-showing-all");
        if (totalActiveFilters == totalFilters) this.form.classList.add("is-showing-all");
    }

    updateInfo(info) {
        if (info) {
            if (info.type == "search") {
                this.searchTerm = info.content;
            }
        }
        let searchFeedback = this.searchTerm != "" ? "Searching '&hairsp;" + this.searchTerm + "&hairsp;'" : "";

        let activeFilterValues = this.getActiveFilterValues();
        let totalFilters = this.toggles.length;

        if (activeFilterValues.all.length == totalFilters) {
            this.collapsedTitle.innerHTML = this.initialCollapsedTitle;
            if (searchFeedback != "") {
                this.collapsedInfo.innerHTML = searchFeedback + ".";
                this.collapsedInfo.classList.add("is-visible");
            } else {
                this.collapsedInfo.innerHTML = "";
                this.collapsedInfo.classList.remove("is-visible");
            }
        } else {
            let strings = [];
            Object.keys(activeFilterValues.byGroup).forEach((k, i) => {
                let string = activeFilterValues.byGroup[k].length + " ";
                if (activeFilterValues.byGroup[k].length == 1) string += this.dictionary[k][0];
                else string += this.dictionary[k][1];
                strings.push(string);
            });
            this.collapsedTitle.innerHTML = strings.join(", ");

            let activeFilterslabels = activeFilterValues.all.map((v) => v.label).join(", ");
            if (activeFilterslabels != "" || searchFeedback != "") {
                if (activeFilterslabels == "") activeFilterslabels = "nothing";
                this.collapsedInfo.innerHTML = (searchFeedback != "" ? searchFeedback + " in " : "") + activeFilterslabels + ".";
                this.collapsedInfo.classList.add("is-visible");
            }
        }
    }

    filter() {
        let activeFilterValues;
        const type = "AND";
        if (type == "AND") activeFilterValues = this.getActiveFilterValues().byGroup;
        if (type == "OR") activeFilterValues = this.getActiveFilterValues().all;

        for (let section of this.sections.public().getFilterables()) {
            for (let item of section.items) {
                let taxonomy = item.dataset.taxonomy;
                let match = false;

                if (type == "OR") {
                    for (let value of activeFilterValues) {
                        match = taxonomy.indexOf(value.name) >= 0 && true;
                        if (match) break;
                    }
                }

                if (type == "AND") {
                    Object.keys(activeFilterValues).forEach((group, i) => {
                        if (i == 0 || (i > 0 && match)) {
                            for (let value of activeFilterValues[group]) {
                                match = taxonomy.indexOf(value.name) >= 0 && true;
                                if (match) break;
                            }
                        } else {
                            match = false;
                        }
                    });
                }

                if (match) {
                    this.sections.public().filter("buttons", item, true);
                } else {
                    this.sections.public().filter("buttons", item, false);
                }
            }
        }
        this.sections.public().filteringDone();
    }

    getActiveFilterValues() {
        let activeFilterValues = {
            all: [],
            byGroup: {},
        };
        for (let t of this.toggles) {
            if (!activeFilterValues.byGroup[t.dataset.filterGroup]) activeFilterValues.byGroup[t.dataset.filterGroup] = [];
            if (t.checked) {
                let value = {
                    name: t.value,
                    label: t.dataset.label,
                };
                activeFilterValues.byGroup[t.dataset.filterGroup].push(value);
                activeFilterValues.all.push(value);
            }
        }
        return activeFilterValues;
    }

    public() {
        return {
            updateInfoWith(info) {
                this.updateInfo(info);
            },
        };
    }
}

class Sorter {
    constructor(sections) {
        this.sections = sections;
        this.inputSorter = document.querySelector("[data-sort-feature-items-select]");
        this.bind();
    }

    bind() {
        this.inputSorter.addEventListener("change", this.sortBy.bind(this, null));
    }

    getSorted(items, by) {
        if (by == "name") {
            items.sort(function (a, b) {
                if (a.dataset.name.toLowerCase() < b.dataset.name.toLowerCase()) {
                    return -1;
                }
                if (a.dataset.name.toLowerCase() > b.dataset.name.toLowerCase()) {
                    return 1;
                }
                return 0;
            });
        }
        if (by == "date") {
            items.sort(function (a, b) {
                if (a.dataset.date < b.dataset.date) {
                    return 1;
                }
                if (a.dataset.date > b.dataset.date) {
                    return -1;
                }
                return 0;
            });
        }
        return items;
    }

    sortBy(by) {
        by = by ?? this.inputSorter.value;
        for (let sortable of this.sections.public().getSortables()) {
            let items = Array.prototype.slice.call(sortable.items);
            let sortedItems = this.getSorted(items, by);
            this.sections.public().replaceSorted(sortedItems, sortable.container);
        }
    }
}

class Grouper {
    constructor(sections) {
        this.sections = sections;
        this.inputGrouper = document.querySelector("[data-group-feature-items-select]");
        this.defaultGroups = this.getDefaultGroups();
        this.categories = this.getCategories();
        this.bind();
    }

    bind() {
        this.inputGrouper.addEventListener("change", this.groupBy.bind(this, null));
    }

    groupBy(by) {
        by = by ?? this.inputGrouper.value;
        let groupsData = this.getNewGroupsData(by);
        this.sections.public().rebuildWithData(groupsData, by);
    }

    getNewGroupsData(by) {
        let data = [];
        let items = this.sections.public().getGroupables();
        if (by == "none") {
            this.defaultGroups.map((c) => {
                let sect = {};
                sect.name = c.label;
                sect.items = [];
                for (let item of items) {
                    if (item.dataset.defaultGroup == c.name) sect.items.push(item);
                }
                sect.viewAllLink = {
                    isHidden: true,
                    href: "",
                };
                data.push(sect);
            });
        } else if (by == "category") {
            this.categories.map((c) => {
                let sect = {};
                sect.name = c.label;
                sect.items = [];
                for (let item of items) {
                    if (item.dataset.category == c.label) sect.items.push(item);
                }
                sect.viewAllLink = {
                    isHidden: false,
                    href: "/category/" + c.name + "/",
                };
                data.push(sect);
            });
        }
        return data;
    }

    getDefaultGroups() {
        let groups = [];
        this.sections.filterables.forEach((sect) => {
            let name = sect.section.dataset.featureItemsSection;
            let label = sect.section.querySelector("[data-feature-section-name]").innerHTML;
            groups.push({
                label: label,
                name: name,
            });
        });
        return groups;
    }

    getCategories() {
        let categories = document.querySelector("#feature-js").dataset.categories.split(",");
        categories = categories.map((c) => {
            let parts = c.split("|");
            return { label: parts[0], name: parts[1] };
        });
        return categories;
    }
}

class Searcher {
    constructor(sections, filter) {
        this.sections = sections;
        this.filter = filter;
        this.input = document.querySelector("[data-search-feature-items-input]");
        this.bind();
    }

    bind() {
        this.input.addEventListener("change", this.search.bind(this, null));
        this.input.addEventListener("keyup", this.search.bind(this, null));
    }

    search(term) {
        term = term ?? this.sanitizeInput(this.input.value);
        let search = this.defineSearch(term);
        this.filter.public().updateInfoWith.call(this.filter, {
            type: "search",
            content: search.term,
        });
        this.filterBySearch(search);
    }

    filterBySearch(search) {
        let ignoreCase = !search.caseSensitive;
        for (let section of this.sections.public().getFilterables()) {
            for (let item of section.items) {
                let match = false;
                let searchables = item.querySelectorAll("[data-searchable]");
                searchables.forEach((searchable) => {
                    let content = searchable.textContent;
                    if (ignoreCase) content = content.toLowerCase();
                    if (content.indexOf(search.term) >= 0) match = true;
                });

                if (match) {
                    this.sections.public().filter("search", item, true);
                } else {
                    this.sections.public().filter("search", item, false);
                }
            }
        }
        this.sections.public().filteringDone();
    }

    defineSearch(term) {
        let caseSensitive = term.match(/^&quot;/g) !== null && term.match(/&quot;$/g) !== null;
        if (caseSensitive) term = term.substring(6, term.length - 6);
        else term = term.toLowerCase();

        return {
            caseSensitive: caseSensitive,
            term: term,
        };
    }

    sanitizeInput(value) {
        const escapes = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;",
            "`": "&grave;",
        };
        const reg = /[&<>"'`/]/gi;
        return value.replace(reg, (match) => escapes[match]);
    }
}
