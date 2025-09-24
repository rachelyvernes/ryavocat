<template>
  <div class="Contact page">
    <div class="content">
      <div class="grid md:grid-cols-2 gap-10 xl:gap-[70px]">
        <div>
          <p class="-h4 mb-8">
            Ecrivez moi ! Je vous réponds sous 48h
          </p>
          <form class="grid sm:grid-cols-2 gap-2.5">
            <input class="sm:col-span-2" type="text" placeholder="Nom et prénom">
            <input class="sm:col-span-2" type="text" placeholder="Votre entreprise">
            <input type="text" placeholder="Email">
            <input type="text" placeholder="Téléphone">
            <select class="sm:col-span-2" name="motif">
              <option value="" selected disabled>Motif du contact</option>
              <option value="devis">Demande de devis</option>
            </select>
            <textarea class="sm:col-span-2" name="" id="" placeholder="Votre message"></textarea>
            <div>
              <button>
                Envoyer
              </button>
            </div>
          </form>
        </div>
        <div>
          <p class="-h4 mb-8">
            Ou prenez rendez-vous directement ici 
          </p>
          <div class="grid lg:grid-cols-2 gap-2.5"> 
            <div class="-btn -xl relative !text-[20px] text-center">
              <a class="absolute inset-0 z-10" href=""></a>
              <p class="mb-2 ">
                Rendez-vous cabinet
              </p>
              <p class="font-normal">
                30 min · 75€ TTC
              </p>
            </div>
            <div class="-btn -xl relative !text-[20px] text-center">
              <a class="absolute inset-0 z-10" href=""></a>
              <p class="mb-2 ">
                Rendez-vous cabinet
              </p>
              <p class="font-normal">
                30 min · 75€ TTC
              </p>
            </div>
            <div class="-btn -xl relative !text-[20px] text-center">
              <a class="absolute inset-0 z-10" href=""></a>
              <p class="mb-2 ">
                Rendez-vous cabinet
              </p>
              <p class="font-normal">
                30 min · 75€ TTC
              </p>
            </div>
            <div class="-btn -xl relative !text-[20px] text-center">
              <a class="absolute inset-0 z-10" href=""></a>
              <p class="mb-2 ">
                Rendez-vous cabinet
              </p>
              <p class="font-normal">
                30 min · 75€ TTC
              </p>
            </div>
          </div>
          <p class="mt-8">
            Cette somme sera déduite des honoraires si le rendez-vous est suivi d’une ouverture du dossier 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>