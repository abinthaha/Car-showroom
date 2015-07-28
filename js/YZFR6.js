function() {
  a.instantlyCloseOthers === !0 && r.removeClass("open");
  t.clearTimeout(f);
  s.addClass("open")
}
f.prototype.toggle = function(d) {
  var e = a(this);
  if (!e.is(".disabled, :disabled")) {
    var f = c(e),
      g = f.hasClass("open");
    if (b(), !g) {
      "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
      var h = {
        relatedTarget: this
      };
      if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
      f.toggleClass("open").trigger("shown.bs.dropdown", h), e.focus()
    }
    return !1
  }
}