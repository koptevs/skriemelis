<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create(
            'lifts', function (Blueprint $table) {
                $table->id();
                $table->string('reg_number', 32)->unique();
                // $table->string('reg_number', 16)->primary();
                $table->enum('lift_type', ['elektriskais', 'hidrauliskais']);
                $table->enum('lift_category', ['1', '2', '3', 'CE']);
                $table->string('factory_number', 32);
                $table->string('model', 64)->nullable();
                $table->text('speed')->nullable();
                $table->integer('load')->unsigned();
                $table->string('manufacturer', 128)->nullable();
                // $table->string('manufacture_year')->nullable();
                $table->string('installer', 128)->nullable();
                $table->integer('installation_year')->unsigned();
//                $table->string('floors_total')->nullable();
                $table->integer('floors_serviced')->unsigned()->nullable();
                $table->string('address_country', 64);
                $table->string('address', 256);
                // $table->string('address_novads', 128)->nullable();
                // $table->string('address_pagasts', 128)->nullable();
                // $table->string('address_city', 64);
                // $table->string('address_street');
                // $table->string('address_building');
                // $table->string('address_entrance')->nullable();
                $table->string('address_postal_code');
                $table->text('notes')->nullable();
                $table->foreignId('lift_manager_id')->nullable();
                $table->timestamps();
            }
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lifts');
    }
};
